import axios, { type AxiosInstance } from "axios";
import { useStore } from "vuex";
import type { StoreState } from "../stores";

const store = useStore<StoreState>();

/**
 * フォームの情報
 */
export interface FormInfo {
  title: string;
  documentTitle?: string;
  description?: string;
}

/**
 * Google Formのインスタンス
 */
export class GoogleForm {
  /**
   * 生成
   * @returns 生成されたGoogleFormのインスタンス
   */
  public static async create(info: FormInfo): Promise<GoogleForm> {
    const endpoint = "https://forms.googleapis.com/v1/forms";
    try {
      const body = {
        info,
        items: [],
      };
      const response = await axios.post(endpoint, body);
      if (Math.floor(response.status / 200) !== 2) {
        throw response;
      }

      // Storeに追加してインスタンスを返す
      const formId: string = response.data.formid;
      store.commit("addForm", formId);
      return new GoogleForm(formId);
    } catch (error) {
      console.error("Create Form Failed.");
      throw error;
    }
  }

  /**
   * フォームのリストを取得
   * @returns フォームのリスト
   */
  public static getList(): GoogleForm[] {
    return store.state.forms.map((f) => new GoogleForm(f.id));
  }

  private axios: AxiosInstance;

  /**
   * コンストラクタ
   * @param formId フォームID
   */
  private constructor(private formId: string) {
    const baseURL = `https://forms.googleapis.com/v1/forms/${this.formId}`;
    this.axios = axios.create({
      baseURL,
    });
  }
}

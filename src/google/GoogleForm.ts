import axios, { type AxiosInstance } from "axios";

/**
 * Google Formのインスタンス
 */
export class GoogleForm {
  /**
   * 生成
   * @returns 生成されたGoogleFormのインスタンス
   */
  static create(): GoogleForm {
    throw new Error("Not Implemented");
  }

  private axios: AxiosInstance;

  /**
   * コンストラクタ
   * @param formId フォームID
   */
  private constructor(private formId: string) {
    const baseURL = `https://docs.google.com/forms/d/e/${this.formId}`;
    this.axios = axios.create({
      baseURL,
    });
  }
}

/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 字典数据实体
 * @export
 * @interface DictionaryEntity
 */
export interface DictionaryEntity {
  /**
   * 主键ID
   * @type {string}
   * @memberof DictionaryEntity
   */
  id?: string;
  /**
   * 字典代码
   * @type {string}
   * @memberof DictionaryEntity
   */
  code: string;
  /**
   * 字典名称
   * @type {string}
   * @memberof DictionaryEntity
   */
  name: string;
  /**
   * 字典描述
   * @type {string}
   * @memberof DictionaryEntity
   */
  description?: string;
}

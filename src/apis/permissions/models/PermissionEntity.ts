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
 * 权限数据实体
 * @export
 * @interface PermissionEntity
 */
export interface PermissionEntity {
  /**
   * 权限ID
   * @type {string}
   * @memberof PermissionEntity
   */
  id?: string;
  /**
   * 权限代码
   * @type {string}
   * @memberof PermissionEntity
   */
  code: string;
  /**
   * 权限名称
   * @type {string}
   * @memberof PermissionEntity
   */
  name: string;
  /**
   * 权限描述
   * @type {string}
   * @memberof PermissionEntity
   */
  description?: string;
}
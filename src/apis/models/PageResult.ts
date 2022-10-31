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
import { PageableObject } from './PageableObject';
import { Sort } from './Sort';
/**
 *
 * @export
 * @interface PageResult
 */
export interface PageResult<T> {
  /**
   *
   * @type {number}
   * @memberof PageResult
   */
  totalElements: number;
  /**
   *
   * @type {number}
   * @memberof PageResult
   */
  totalPages: number;
  /**
   *
   * @type {number}
   * @memberof PageResult
   */
  size: number;
  /**
   *
   * @type {Array<T>}
   * @memberof PageResult
   */
  content?: Array<T>;
  /**
   *
   * @type {number}
   * @memberof PageResult
   */
  number: number;
  /**
   *
   * @type {Sort}
   * @memberof PageResult
   */
  sort: Sort;
  /**
   *
   * @type {boolean}
   * @memberof PageResult
   */
  first: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PageResult
   */
  last: boolean;
  /**
   *
   * @type {number}
   * @memberof PageResult
   */
  numberOfElements: number;
  /**
   *
   * @type {PageableObject}
   * @memberof PageResult
   */
  pageable: PageableObject;
  /**
   *
   * @type {boolean}
   * @memberof PageResult
   */
  empty: boolean;
}

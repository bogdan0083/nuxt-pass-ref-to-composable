/* tslint:disable */
/* eslint-disable */
/**
 * RealWorld Conduit API
 * Conduit API documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Article } from './Article';
import {
    ArticleFromJSON,
    ArticleFromJSONTyped,
    ArticleToJSON,
} from './Article';

/**
 * 
 * @export
 * @interface GetArticlesFeed200Response
 */
export interface GetArticlesFeed200Response {
    /**
     * 
     * @type {Array<Article>}
     * @memberof GetArticlesFeed200Response
     */
    articles: Array<Article>;
    /**
     * 
     * @type {number}
     * @memberof GetArticlesFeed200Response
     */
    articlesCount: number;
}

/**
 * Check if a given object implements the GetArticlesFeed200Response interface.
 */
export function instanceOfGetArticlesFeed200Response(value: object): boolean {
    if (!('articles' in value)) return false;
    if (!('articlesCount' in value)) return false;
    return true;
}

export function GetArticlesFeed200ResponseFromJSON(json: any): GetArticlesFeed200Response {
    return GetArticlesFeed200ResponseFromJSONTyped(json, false);
}

export function GetArticlesFeed200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetArticlesFeed200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'articles': ((json['articles'] as Array<any>).map(ArticleFromJSON)),
        'articlesCount': json['articlesCount'],
    };
}

export function GetArticlesFeed200ResponseToJSON(value?: GetArticlesFeed200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'articles': ((value['articles'] as Array<any>).map(ArticleToJSON)),
        'articlesCount': value['articlesCount'],
    };
}


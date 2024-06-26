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
import type { NewArticle } from './NewArticle';
import {
    NewArticleFromJSON,
    NewArticleFromJSONTyped,
    NewArticleToJSON,
} from './NewArticle';

/**
 * 
 * @export
 * @interface CreateArticleRequest
 */
export interface CreateArticleRequest {
    /**
     * 
     * @type {NewArticle}
     * @memberof CreateArticleRequest
     */
    article: NewArticle;
}

/**
 * Check if a given object implements the CreateArticleRequest interface.
 */
export function instanceOfCreateArticleRequest(value: object): boolean {
    if (!('article' in value)) return false;
    return true;
}

export function CreateArticleRequestFromJSON(json: any): CreateArticleRequest {
    return CreateArticleRequestFromJSONTyped(json, false);
}

export function CreateArticleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateArticleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'article': NewArticleFromJSON(json['article']),
    };
}

export function CreateArticleRequestToJSON(value?: CreateArticleRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'article': NewArticleToJSON(value['article']),
    };
}


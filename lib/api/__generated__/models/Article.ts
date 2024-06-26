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
import type { Profile } from './Profile';
import {
    ProfileFromJSON,
    ProfileFromJSONTyped,
    ProfileToJSON,
} from './Profile';

/**
 * 
 * @export
 * @interface Article
 */
export interface Article {
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    body: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Article
     */
    tagList: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof Article
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Article
     */
    updatedAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof Article
     */
    favorited: boolean;
    /**
     * 
     * @type {number}
     * @memberof Article
     */
    favoritesCount: number;
    /**
     * 
     * @type {Profile}
     * @memberof Article
     */
    author: Profile;
}

/**
 * Check if a given object implements the Article interface.
 */
export function instanceOfArticle(value: object): boolean {
    if (!('slug' in value)) return false;
    if (!('title' in value)) return false;
    if (!('description' in value)) return false;
    if (!('body' in value)) return false;
    if (!('tagList' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('updatedAt' in value)) return false;
    if (!('favorited' in value)) return false;
    if (!('favoritesCount' in value)) return false;
    if (!('author' in value)) return false;
    return true;
}

export function ArticleFromJSON(json: any): Article {
    return ArticleFromJSONTyped(json, false);
}

export function ArticleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Article {
    if (json == null) {
        return json;
    }
    return {
        
        'slug': json['slug'],
        'title': json['title'],
        'description': json['description'],
        'body': json['body'],
        'tagList': json['tagList'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'favorited': json['favorited'],
        'favoritesCount': json['favoritesCount'],
        'author': ProfileFromJSON(json['author']),
    };
}

export function ArticleToJSON(value?: Article | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'slug': value['slug'],
        'title': value['title'],
        'description': value['description'],
        'body': value['body'],
        'tagList': value['tagList'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
        'favorited': value['favorited'],
        'favoritesCount': value['favoritesCount'],
        'author': ProfileToJSON(value['author']),
    };
}


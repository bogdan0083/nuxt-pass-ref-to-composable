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
/**
 * 
 * @export
 * @interface NewUser
 */
export interface NewUser {
    /**
     * 
     * @type {string}
     * @memberof NewUser
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof NewUser
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof NewUser
     */
    password: string;
}

/**
 * Check if a given object implements the NewUser interface.
 */
export function instanceOfNewUser(value: object): boolean {
    if (!('username' in value)) return false;
    if (!('email' in value)) return false;
    if (!('password' in value)) return false;
    return true;
}

export function NewUserFromJSON(json: any): NewUser {
    return NewUserFromJSONTyped(json, false);
}

export function NewUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewUser {
    if (json == null) {
        return json;
    }
    return {
        
        'username': json['username'],
        'email': json['email'],
        'password': json['password'],
    };
}

export function NewUserToJSON(value?: NewUser | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'username': value['username'],
        'email': value['email'],
        'password': value['password'],
    };
}


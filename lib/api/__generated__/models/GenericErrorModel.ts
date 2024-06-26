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
import type { GenericErrorModelErrors } from './GenericErrorModelErrors';
import {
    GenericErrorModelErrorsFromJSON,
    GenericErrorModelErrorsFromJSONTyped,
    GenericErrorModelErrorsToJSON,
} from './GenericErrorModelErrors';

/**
 * 
 * @export
 * @interface GenericErrorModel
 */
export interface GenericErrorModel {
    /**
     * 
     * @type {GenericErrorModelErrors}
     * @memberof GenericErrorModel
     */
    errors: GenericErrorModelErrors;
}

/**
 * Check if a given object implements the GenericErrorModel interface.
 */
export function instanceOfGenericErrorModel(value: object): boolean {
    if (!('errors' in value)) return false;
    return true;
}

export function GenericErrorModelFromJSON(json: any): GenericErrorModel {
    return GenericErrorModelFromJSONTyped(json, false);
}

export function GenericErrorModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericErrorModel {
    if (json == null) {
        return json;
    }
    return {
        
        'errors': GenericErrorModelErrorsFromJSON(json['errors']),
    };
}

export function GenericErrorModelToJSON(value?: GenericErrorModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errors': GenericErrorModelErrorsToJSON(value['errors']),
    };
}


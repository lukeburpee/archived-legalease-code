import btoa from "btoa";
import uuid from "uuid";

import {addNotification} from "./notifications";
import {getUserToken} from "../utils";
import config from "../config";


export const FORM_PUBLISH = "FORM_PUBLISH";

export const FORM_PUBLICATION_PENDING = "FORM_PUBLICATION_PENDING";
export const FORM_PUBLICATION_DONE = "FORM_PUBLICATION_DONE";
export const FORM_PUBLICATION_FAILED = "FORM_PUBLICATION_FAILED";

export const FORM_RECORD_CREATION_PENDING = "FORM_RECORD_CREATION_PENDING";
export const FORM_RECORD_CREATION_DONE = "FORM_RECORD_CREATION_DONE";

export const SCHEMA_RETRIEVAL_PENDING = "SCHEMA_RETRIEVAL_PENDING";
export const SCHEMA_RETRIEVAL_DONE = "SCHEMA_RETRIEVAL_DONE";

export const RECORDS_RETRIEVAL_PENDING = "RECORDS_RETRIEVAL_PENDING";
export const RECORDS_RETRIEVAL_DONE = "RECORDS_RETRIEVAL_DONE";

const CONNECTIVITY_ISSUES = "This is usually due to an unresponsive server or some connectivity issues.";

function connectivityIssues(dispatch, message) {
  const msg = message +  " " + CONNECTIVITY_ISSUES;
  dispatch(addNotification(msg, {type: "error"}));
}

/**
 * Return HTTP authentication headers from a given token.
 **/
function getAuthenticationHeaders(token) {
  return {Authorization: "Basic " + btoa(`form:${token}`)};
}

/**
 * Initializes the bucket used to store all the forms and answers.
 *
 * - All authenticated users can create new collections
 * - The credentials used to create this bucket aren't useful anymore after
 *   this function as the user is removed from the permissions.
 **/
/**
 * Publishes a new form and give the credentials to the callback function
 * when it's done.
 *
 * In case a 403 is retrieved, initialisation of the bucket is triggered.
 **/

/**
 * Submit a new form answer.
 * New credentials are created for each answer.
 **/

/**
 * Retrieve all the answers to a specific form.
 *
 * The userToken is derived from the the adminToken.
**/
import { randomUUID } from "crypto";

/**
 * Service client class that interacts with our Internet of Things vendor
 */
export class IOT {
  /**
   * Creates a patient in our Internet of Things vendor
   * @param {object} patient patient to create in our IoT vendor system
   * @param {string} patient.firstName patient first name in our IoT system
   * @param {string} patient.lastName patient last name in our IoT system
   * @param {object} patient.address patient address in our IoT system
   * @param {string} patient.address.lineOne patient address line one in our IoT system
   * @param {string} patient.address.lineTwo patient address line two in our IoT system
   * @param {string} patient.address.city patient address city in our IoT system
   * @param {string} patient.address.stateCode patient address 2 character state code in our IoT system
   * @param {string} patient.address.postalCode patient address postal code in our IoT system 
   * @returns {string} unique id of the patient in our IoT system
   */
  async createPatient(patient: {
    firstName: string;
    lastName: string;
    address: {
      lineOne: string;
      lineTwo: string;
      city: string;
      stateCode: string;
      postalCode: string;
    };
    phone: string;
    email: string;
  }): Promise<string> {
    console.log('created IOT patient');
    return randomUUID();
  }
}

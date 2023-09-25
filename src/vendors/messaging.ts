import { randomUUID } from "crypto";

export class Messaging {
    /**
     * Creates a patient in our messaging system
     * @param {object} patient patient details required for our messaging system
     * @param {string} patient.firstName first name in our messaging system
     * @param {string} patient.lastName last name in our messaging system
     * @param {string} patient.handle unique messaging handle in our messaging system
     * @param {string} patient.timeZone IANA time zone of the patient in our messaging system
     * @returns {string} unique id for the patient in our messaging system
     */
  async createPatient(patient: {
    firstName: string;
    lastName: string;
    handle: string;
    timeZone: string;
  }): Promise<string> {
    console.log('created Messaging patient');
    return randomUUID();
  }
}

import { randomUUID } from 'crypto';

export class Support {
  /**
   * creates a patient in our support desk software
   * @param {object} patient patient in our support desk software to create
   * @param {string} patient.firstName patient first name in our support system
   * @param {string} patient.lastName patient last name in our support system
   * @param {email} patient.email patient email in our support system
   * @param {phone} patient.phone patient phone in our support system
   * @param {timeZone} patient.timeZone patient IANA time zone in our support system
   * @returns {string} unique id of the support desk software patient record
   */
  async createPatient(patient: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    timeZone: string;
  }): Promise<string> {
    console.log('created support patient');
    return randomUUID();
  }
}

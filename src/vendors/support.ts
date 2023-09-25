import { randomUUID } from "crypto";

export interface SupportPatient {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  timeZone: string;
}

// fake implementation of our Support system's persistence
const store = new Map<string, SupportPatient>();

export class Support {
  /**
   * creates a patient in our support desk software
   * @param {SupportPatient} patient patient in our support desk software to create
   * @returns {string} unique id of the support desk software patient record
   */
  async createPatient(patient: SupportPatient): Promise<string> {
    const id = randomUUID();
    store.set(id, patient);
    console.log("created support patient");
    return id;
  }
}

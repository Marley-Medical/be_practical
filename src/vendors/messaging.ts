import { randomUUID } from "crypto";

export interface MessagingPatient {
  firstName: string;
  lastName: string;
  handle: string;
  timeZone: string;
}

// fake messaging persistence
const store = new Map<string, MessagingPatient>();

export class Messaging {
  /**
   * Creates a patient in our messaging system
   * @param {MessagingPatient} patient patient details required for our messaging system
   * @returns {string} unique id for the patient in our messaging system
   */
  async createPatient(patient: MessagingPatient): Promise<string> {
    const id = randomUUID();
    store.set(id, patient);
    console.log("created Messaging patient");

    return id;
  }
}

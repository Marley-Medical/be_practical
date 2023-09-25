import { randomUUID } from "crypto";

export interface MarleyPatient {
  id?: string;
}

// fake implementation of our db persistence store
const store = new Map<string, MarleyPatient>();

export class DB {
  /**
   * Creates a patient in Marley's product db and returns the unique ID for the patient in the db
   * @param {MarleyPatient} patient the patient data to save. Fill in the typescript type details
   * @returns {string} the unique id of the patient
   */
  async createPatient(patient: MarleyPatient): Promise<string> {
    // this is not a challenge of how to write to a db
    // so don't connect to a real db

    const id = randomUUID();
    patient.id = id;
    store.set(id, patient);
    console.log("created db patient");

    return patient.id;
  }
}

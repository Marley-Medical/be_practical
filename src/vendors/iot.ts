import { randomUUID } from "crypto";

export interface IOTPatient {
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
}

// fake implementation of our IoT persistence
const store = new Map<string, IOTPatient>();

/**
 * Service client class that interacts with our Internet of Things vendor
 */
export class IOT {
  /**
   * Creates a patient in our Internet of Things vendor
   * @param {IOTPatient} patient patient to create in our IoT vendor system
   */
  async createPatient(patient: IOTPatient): Promise<string> {
    const id = randomUUID();
    store.set(id, patient);
    console.log("created IOT patient");
    return id;
  }
}

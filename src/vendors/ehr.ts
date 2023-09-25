// / <referencepath="../../node_modules/@types/fhir/index.d.ts"/>
import { randomUUID } from "crypto";

// fake implementation of our ehr persistence store
const store = new Map<string, fhir4.Patient>();

export class EHR {
  /**
   * Creates a patient in our clinical Electronic Health Records system
   * @param {fhir4.Patient} patient clinical patient
   * @returns {fhir4.Patient} clinical patient created in our Electronic Health Records system
   */
  async createPatient(patient: fhir4.Patient): Promise<string> {
    if (!patient.id) {
      patient.id = randomUUID();
    }

    store.set(patient.id, patient);
    console.log("created EHR patient");

    return patient.id;
  }
}

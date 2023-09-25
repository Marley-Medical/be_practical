// / <referencepath="../../node_modules/@types/fhir/index.d.ts"/>
import { randomUUID } from 'crypto';

export class EHR {
    /**
     * Creates a patient in our clinical Electronic Health Records system
     * @param {fhir4.Patient} patient clinical patient
     * @returns {fhir4.Patient} clinical patient created in our Electronic Health Records system
     */
    async createPatient(patient: fhir4.Patient): Promise<fhir4.Patient> {
        if (!patient.id){
            patient.id = randomUUID();
        }

        console.log('created EHR patient');

        return patient;
    }
}

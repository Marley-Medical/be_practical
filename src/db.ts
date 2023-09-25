import { randomUUID } from 'crypto';

export class DB {
    /**
     * Creates a patient in Marley's product db and returns the unique ID for the patient in the db
     * @param {object} patient the patient data to save. Fill in the typescript type details
     * @returns {string} the unique id of the patient
     */
    async createPatient(patient: {}): Promise<string>{

        // just returrn a random uuidv4
        // this is not a challenge of how to write to a db
        // so don't connect to a real db
        console.log('created db patient');
        return randomUUID();
    }
}

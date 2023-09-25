import { DB } from './db';
import { EHR, IOT, Messaging, Support } from './vendors';

(async function main() {
    try {
        console.log('starting');
        // assume this is the patient intake input you received from our sales rep
        // fill in what you need to create a patient in Marley's product as well as
        // clinical and consumer grade tools. This is not a challenge on how to pass
        // in input to a node program so hardcoding fields here is perfectly fine.
        const input = {};

        // create the patient in our product's db
        // what is the data structure you'd want saved here? why?
        const db = new DB();
        await db.createPatient({});

        // create the patient in our vendor systems imported above
        // What considerations do you need to think about with this
        // I/O bound work? why?
        // We've added the start of calling our EHR vendor here as a start.
        
        const ehr = new EHR();
        const ehrId = await ehr.createPatient({} as fhir4.Patient);

        // Is there anything else you'd want to do?
        // Are there things we'd want in each component later? why?
        // Is there a different control flow that works better? why?
        // What can you do to make this method flexible to future requirements
        // like new input and new vendors?
        
        console.log('finished');
        process.exit(0);
    } catch (err) {
        console.log('error');
        console.error(err);
        process.exit(1);
    }
})();

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { oauth2 as SMART } from 'fhirclient';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    console.log("inside launch")

    console.log(this._router.url);
    console.log(this.getUrlVars(this._router.url))

    SMART.authorize({
      iss: 'https://fhir-ehr-code.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d',
      // fhirServiceUrl: 'https://fhir-ehr-code.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d',
      client_id: '0cd11eb8-a8f1-4467-9659-043c97a33fba',
      scope: 'launch online_access openid profile user/AllergyIntolerance.read user/Coverage.read user/Appointment.read user/Observation.read user/Patient.read user/Practitioner.read user/ServiceRequest.read user/DocumentReference.read user/Organization.read user/Encounter.read user/Location.read user/Binary.read user/Condition.read user/CarePlan.read user/CareTeam.read user/Device.read user/DiagnosticReport.read user/Goal.read user/Immunization.read  user/Medication.read user/MedicationRequest.read user/Organization.read user/Procedure.read user/Provenance.read user/RelatedPerson.read user/QuestionnaireResponse.read',
      redirect_uri: 'https://exquisite-malasada-2ced12.netlify.app/home',
    })
  }

  getUrlVars(url: any) {
    var hash: any;
    var myJson: any = {};
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      myJson[hash[0]] = hash[1];
    }
    return myJson;
  }


}

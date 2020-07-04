import { Component, OnInit } from '@angular/core';
import {} from "googlemaps";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DatabaseService} from "../../services/databaseConnection/database.service";
import {UserData} from "../../services/databaseConnection/models/userData";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {
  map: google.maps.Map;
  service;

  form: FormGroup;

  public tournamentIcon: File;
  public tournamentBanner: File;

  userData: UserData;

  placeID: string;
  placeData;

  tinyMceSettings = {
    height: 500,
    menubar: true,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help'
  };

  constructor(private db: DatabaseService,
              private router: Router) {}

  ngOnInit(): void {
    this.form = new  FormGroup({
      tournamentName: new FormControl('', [Validators.required]),
      locationID: new FormControl('', [Validators.required]),
      tournamentDescription: new FormControl('', [Validators.required]),
      bannerImage: new FormControl('', [Validators.required]),
      iconImage: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
      registrationStartTime: new FormControl('', [Validators.required]),
      registrationEndTime: new FormControl('', [Validators.required])
    });

    this.db.userData().subscribe(
      value => {
        this.userData = value;
        console.log(value)
      }
    );

    this.initMap();
  }

   initMap() {
    if(document.getElementById('map') != null) {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.11739093136664, lng: 17.0772959},
        zoom: 12
      });
      this.map.addListener('click',  async (event:google.maps.Place) => {
        if(event.placeId) {
          this.placeID = event.placeId;
          this.form.controls.locationID.patchValue(this.placeID);

          let query = {
            placeId: this.placeID,
            fields: ["name", "vicinity", "photos"]
          }

          //@ts-ignore
          this.service.getDetails(query, (place, status) =>{
            this.placeData = place;
            console.log(place);
          });
        }
      });

      // @ts-ignore
      this.service = new google.maps.places.PlacesService(this.map);
    }
  }

  iconFileBrowser(event) {
    this.form.patchValue({
      iconImage: event.files[0]
    });
  }

  bannerFileBrowser(event) {
    this.form.patchValue({
      bannerImage: event.files[0]
    });
    // let reader = new FileReader();
    // if(event.files && event.files.length) {
    //   const [file] = event.files;
    //   reader.readAsDataURL(file);
    //
    //   reader.onload = () => {
    //     this.form.patchValue({
    //       bannerImage: reader.result
    //     });
    //   };
    // }
  }

  descriptionChanged(event) {
    this.form.patchValue({tournamentDescription: event.editor.getContent()});
  }

  submitForm() {
    if(this.form.valid){
      let startDate = this.changeDateFormat(this.form.controls.startTime.value.toLocaleDateString());
      let endDate = this.changeDateFormat(this.form.controls.endTime.value.toLocaleDateString());

      let startDateRegistration = this.changeDateFormat(this.form.controls.registrationStartTime.value.toLocaleDateString());
      let endDateRegistration = this.changeDateFormat(this.form.controls.registrationEndTime.value.toLocaleDateString());

      let data = new FormData();
      data.append('name', this.form.controls.tournamentName.value)
      data.append('description',  this.form.controls.tournamentDescription.value);
      data.append('icon', this.form.controls.iconImage.value);
      data.append('banner', this.form.controls.bannerImage.value);
      data.append('start_time', `${startDate}T23:59`);
      data.append('end_time', `${endDate}T23:59`);
      data.append('locationID', this.form.controls.locationID.value);
      data.append('registration_start_time', `${startDateRegistration}T23:59`);
      data.append('registration_end_time', `${endDateRegistration}T23:59`);
      data.append('event_owner', `${this.userData.id}`);

      this.db.createTournament(data).subscribe(
        value => {
          this.router.navigateByUrl("/profile");
        },
        error => console.log(error))
    }
  }

  changeDateFormat(date) {
    let arr = date.toString().split("/");
    return `${arr[2]}-${arr[0]}-${arr[1]}`;
  }

}

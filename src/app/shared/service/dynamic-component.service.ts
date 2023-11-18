import { Injectable } from '@angular/core';
import { BasicHomeBannerComponent } from 'src/app/themes/BasicTheme/home/basic-home-banner/basic-home-banner.component';
import { BasicHomeSkillsComponent } from 'src/app/themes/BasicTheme/home/basic-home-skills/basic-home-skills.component';
import { DynamicComponentDataType } from '../model/dynamicComponentType';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  constructor() { }
  HomePage: any[] = [
    {
      selector: 'BasicHomeBannerComponent',
      data: {
        name: {
          text: "Senthil Kumar",
          styles: {
            'background-color': '',
            'color': '#ffffff',
            'text-align': 'left',
            'font-size': '60px',
            'font-weight': 'bold',
            'padding': null
          },
          cssData: '',
          dataType: 'text',
          lable: 'heading text',
          isVisible: true
        },
        designation: {
          text: "Software Engineer",
          styles: {
            'background-color': '',
            'color': '#ffffff',
            'text-align': 'left',
            'font-size': '40px',
            'font-weight': '500',
            'padding': null
          },
          cssData: '',
          dataType: 'Text',
          lable: 'heading text',
          isVisible: true
        },

        image: {
          url: "./assets/mypic/senthilProfile.jpg",
          styles: {
            'background-color': '#121212',
            'filter': 'grayscale(40%)'
          },
          cssData: '',
          dataType: 'Image',
          lable: 'Profile image',
          isVisible: true
        }
      },
      setting: {}

    },
    {
      selector: 'BasicHomeSkillsComponent',
      data: {
        title: {
          text: "Skills",
          styles: {
            'background-color': '',
            'color': '#ffffff',
            'text-align': 'left',
            'font-size': '50px',
            'padding': '20px',
            'font-weight': 'bold'
          },
          cssData: '',
          dataType: 'Text',
          lable: 'Title',
          isVisible: true
        },
        isVisible: true
      },
      setting: {}
    },
    // {
    //   selector: 'BasicHomeBannerComponent',
    //   data: {
    //     name: 'Bombasto3', bio: 'Brave as they come3',
    //     isVisible: true
    //   },
    // },
    // {
    //   selector: 'BasicHomeBannerComponent',
    //   data: {
    //     headline: 'Bombasto4 headline',
    //     body: 'Brave as they come4 body',
    //     isVisible: true
    //   }
    // },
  ];
  typeComponent: any = {
    BasicHomeBannerComponent: BasicHomeBannerComponent,
    BasicHomeSkillsComponent: BasicHomeSkillsComponent,
  };
  getComponent() {
    return this.HomePage.map((x: any) => {
      return new DynamicComponentDataType(
        this.typeComponent[x.selector],
        x.data
        // const isBasicHomeBannerComponentPresent = this.typeComponent.some(component => component.BasicHomeBannerComponent !== undefined);

        // if (isBasicHomeBannerComponentPresent) {
        // const this.typeComponent.find((component) =>{
        //   return component === x.name
        // }
        // }
        // x.data
      );
    });
    // new AdItem(
    //   BasicHomeBannerComponent,
    //   { name: 'Bombasto1', bio: 'Brave as they come' }
    // ),
    // new AdItem(
    //   BasicHomeBannerComponent,
    //   { name: 'Dr. IQ 2', bio: 'Smart as they come' }
    // ),

    // new AdItem(
    //   BasicHomeBannerComponent,
    //   { headline: 'Hiring for several positions 3', body: 'Submit your resume today!' }
    // ),
    // new AdItem(
    //   BasicHomeBannerComponent,
    //   { headline: 'Openings in all departments 4', body: 'Apply today' }
    // )
    // ];
  }
}

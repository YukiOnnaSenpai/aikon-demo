import { Component, OnInit, ViewChild, 
  ComponentFactoryResolver, 
  Type} from '@angular/core';
import { NemzaDirective } from '../directives/nemza/nemza.directive';
import { SnortijaDirective } from '../directives/snortija/snortija.directive';
import { SukiDirective } from '../directives/suki/suki.directive';
import { NemzaComponent } from '../nemza/nemza.component';
import { SnortijaComponent } from '../snortija/snortija.component';
import { SukiComponent } from '../suki/suki.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public names: Array<any> = [];

  @ViewChild(NemzaDirective) nemzaDirective: NemzaDirective;
  @ViewChild(SukiDirective) sukiDirective: SukiDirective;
  @ViewChild(SnortijaDirective) snortijaDirective: SnortijaDirective;

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.names.push("appNemza", "appSnortija", "appSuki");
    console.log("PRODAVNICA NAME IZVOLITE >>>>>> " + this.names[0]);
    const componentTypes = [NemzaComponent, SukiComponent, SnortijaComponent];

    componentTypes.forEach((component) => {
      this.createComponents(component);
    });
    // this.createComponents(NemzaComponent);
  }

  createComponents(component? : any) {
    let factory;

    if(component) {
      factory = this.factoryResolver.resolveComponentFactory(component);
    } else {
      factory = this.factoryResolver.resolveComponentFactory(SukiComponent);
    }
    const componentRef = factory.create(this.nemzaDirective.viewContainerRef.injector);
    //ovde idu propertiji iz komponente
    // (componentRef.instance as NemzaComponent).name = this.nemzaDirective;

    this.nemzaDirective.viewContainerRef.insert(componentRef.hostView, 0);

  }

}

import { Type } from '@angular/core';

export class DynamicComponentDataType {
    constructor(public component: Type<any>, public data: any) { }
}
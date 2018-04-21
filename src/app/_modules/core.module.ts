import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
	imports: [],
	exports: [],
	declarations: [],
	providers: [],
})

export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule) { }
}

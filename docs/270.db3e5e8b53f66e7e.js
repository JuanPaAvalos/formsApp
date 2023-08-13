"use strict";(self.webpackChunkformsApp=self.webpackChunkformsApp||[]).push([[270],{7270:(C,u,m)=>{m.r(u),m.d(u,{ReactiveModule:()=>b});var s=m(6814),p=m(1523),i=m(95),e=m(4946),l=m(9735);function d(o,a){if(1&o&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",t.getFieldError("name")," ")}}function g(o,a){if(1&o&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",t.getFieldError("price")," ")}}function Z(o,a){if(1&o&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",t.getFieldError("inStorage")," ")}}function h(o,a){if(1&o&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",t.getFieldError("name")," ")}}function _(o,a){1&o&&(e.TgZ(0,"span",14),e._uU(1," Se requieren al menos 3 caracteres "),e.qZA())}function v(o,a){1&o&&(e.TgZ(0,"span",14),e._uU(1," Campo Requerido "),e.qZA())}function A(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",15)(1,"div",6),e._UZ(2,"input",16),e.TgZ(3,"button",17),e.NdJ("click",function(){const c=e.CHM(t).index,S=e.oxw();return e.KtG(S.onDeleteFavorite(c))}),e._uU(4,"Eliminar"),e.qZA()(),e.YNc(5,v,2,0,"span",5),e.qZA()}if(2&o){const t=a.index,n=e.oxw();e.xp6(2),e.Q6J("formControlName",t),e.xp6(3),e.Q6J("ngIf",n.isValidFieldInArray(n.favoriteGames,t))}}function T(o,a){if(1&o&&(e.TgZ(0,"span",18),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",t.getFieldError("gender")," ")}}function q(o,a){if(1&o&&(e.TgZ(0,"span",18),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",t.getFieldError("termsAndConditions")," ")}}const F=[{path:"",children:[{path:"basic",component:(()=>{var o;class a{constructor(n,r){this.formBuilder=n,this.validatorsSerice=r,this.myForm=this.formBuilder.group({name:["",[i.kI.required,i.kI.minLength(3)]],price:[0,[i.kI.required,i.kI.min(0)]],inStorage:[0,[i.kI.required,i.kI.min(0)]]})}ngOnInit(){}isValidField(n){return this.validatorsSerice.isValidField(this.myForm,n)}getFieldError(n){return this.myForm.controls[n]?this.validatorsSerice.getFieldErrors(this.myForm,n):null}onSave(){this.myForm.invalid?this.myForm.markAllAsTouched():(console.log(this.myForm.value),this.myForm.reset())}}return(o=a).\u0275fac=function(n){return new(n||o)(e.Y36(i.qu),e.Y36(l.S))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-basic-page"]],decls:71,vars:28,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","placeholder","Nombre del producto",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","number","formControlName","price","placeholder","Precio del producto",1,"form-control"],["type","number","formControlName","inStorage","placeholder","Existencias del producto",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(n,r){1&n&&(e.TgZ(0,"h2"),e._uU(1,"Reactivos: B\xe1sicos"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return r.onSave()}),e.TgZ(6,"div",3)(7,"label",4),e._uU(8,"Producto"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,d,2,1,"span",7),e.qZA()(),e.TgZ(12,"div",3)(13,"label",4),e._uU(14,"Precio"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,g,2,1,"span",7),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"Existencias"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,Z,2,1,"span",7),e.qZA(),e._uU(24,"g "),e.qZA(),e.TgZ(25,"div",0)(26,"div",1)(27,"button",10),e._uU(28," Guardar "),e.qZA()()()()()(),e.TgZ(29,"div",0)(30,"div",1)(31,"span"),e._uU(32,"Valid"),e.qZA(),e.TgZ(33,"pre"),e._uU(34),e.ALo(35,"json"),e.qZA(),e.TgZ(36,"span"),e._uU(37,"Pristine"),e.qZA(),e.TgZ(38,"pre"),e._uU(39),e.ALo(40,"json"),e.qZA(),e.TgZ(41,"span"),e._uU(42,"Touched"),e.qZA(),e.TgZ(43,"pre"),e._uU(44),e.ALo(45,"json"),e.qZA(),e.TgZ(46,"span"),e._uU(47,"Value"),e.qZA(),e.TgZ(48,"pre"),e._uU(49),e.ALo(50,"json"),e.qZA(),e.TgZ(51,"span"),e._uU(52,"Precio"),e.qZA(),e.TgZ(53,"pre"),e._uU(54),e.ALo(55,"json"),e.qZA(),e.TgZ(56,"span"),e._uU(57,"Precio - errors"),e.qZA(),e.TgZ(58,"pre"),e._uU(59),e.ALo(60,"json"),e.qZA(),e.TgZ(61,"span"),e._uU(62,"Producto "),e.qZA(),e.TgZ(63,"pre"),e._uU(64),e.ALo(65,"json"),e.qZA(),e.TgZ(66,"span"),e._uU(67,"Producto - errors"),e.qZA(),e.TgZ(68,"pre"),e._uU(69),e.ALo(70,"json"),e.qZA()()()),2&n&&(e.xp6(5),e.Q6J("formGroup",r.myForm),e.xp6(6),e.Q6J("ngIf",r.isValidField("name")),e.xp6(6),e.Q6J("ngIf",r.isValidField("price")),e.xp6(6),e.Q6J("ngIf",r.isValidField("inStorage")),e.xp6(11),e.Oqu(e.lcZ(35,12,r.myForm.valid)),e.xp6(5),e.Oqu(e.lcZ(40,14,r.myForm.pristine)),e.xp6(5),e.Oqu(e.lcZ(45,16,r.myForm.touched)),e.xp6(5),e.Oqu(e.lcZ(50,18,r.myForm.value)),e.xp6(5),e.Oqu(e.lcZ(55,20,r.myForm.controls.name.value)),e.xp6(5),e.Oqu(e.lcZ(60,22,r.myForm.controls.name.errors)),e.xp6(5),e.Oqu(e.lcZ(65,24,r.myForm.controls.price.value)),e.xp6(5),e.Oqu(e.lcZ(70,26,r.myForm.controls.price.errors)))},dependencies:[s.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,s.Ts],encapsulation:2}),a})()},{path:"dynamic",component:(()=>{var o;class a{constructor(n,r){this.formBuilder=n,this.validatorsSerice=r,this.myDynamicForm=this.formBuilder.group({name:["",[i.kI.required,i.kI.minLength(3)]],favoriteGames:this.formBuilder.array([["Xenoblade",[i.kI.required]],["Final Fantasy",[i.kI.required]]])}),this.newFavorite=new i.NI("",[i.kI.required,i.kI.minLength(3)])}get favoriteGames(){return this.myDynamicForm.get("favoriteGames")}isValidField(n){return this.validatorsSerice.isValidField(this.myDynamicForm,n)}isValidFieldInArray(n,r){return n.controls[r].errors&&n.controls[r].touched}getFieldError(n){return this.myDynamicForm.controls[n]?this.validatorsSerice.getFieldErrors(this.myDynamicForm,n):null}onAddToFavorites(){this.newFavorite.invalid||(this.favoriteGames.push(this.formBuilder.control(this.newFavorite.value,[i.kI.required,i.kI.minLength(3)])),this.newFavorite.reset())}onDeleteFavorite(n){this.favoriteGames.removeAt(n)}onSubmit(){this.myDynamicForm.invalid?this.myDynamicForm.markAllAsTouched():(console.log(this.myDynamicForm.value),this.myDynamicForm.controls.favoriteGames=this.formBuilder.array([]),this.myDynamicForm.reset())}}return(o=a).\u0275fac=function(n){return new(n||o)(e.Y36(i.qu),e.Y36(l.S))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-dynamic-page"]],decls:47,vars:14,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["formControlName","name","placeholder","Nombre de la persona",1,"form-control"],["class","form-text text-danger",4,"ngIf"],[1,"input-group"],["placeholder","Agregar favorito",1,"form-control",3,"formControl"],["type","button",1,"btn","btn-outline-primary",3,"click"],["formArrayName","favoriteGames",1,"col-sm-9"],["class","mb-1",4,"ngFor","ngForOf"],[1,"row"],[1,"col-sm-12"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"],[1,"mb-1"],[1,"form-control",3,"formControlName"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(n,r){1&n&&(e.TgZ(0,"h2"),e._uU(1,"Reactivos: "),e.TgZ(2,"small"),e._uU(3," Din\xe1micos "),e.qZA()(),e._UZ(4,"hr"),e.TgZ(5,"form",0),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(6,"div",1)(7,"label",2),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"div",3),e._UZ(10,"input",4),e.YNc(11,h,2,1,"span",5),e.qZA()(),e.TgZ(12,"div",1)(13,"label",2),e._uU(14,"Agregar"),e.qZA(),e.TgZ(15,"div",3)(16,"div",6),e._UZ(17,"input",7),e.TgZ(18,"button",8),e.NdJ("click",function(){return r.onAddToFavorites()}),e._uU(19," Agregar favorito "),e.qZA()(),e.YNc(20,_,2,0,"span",5),e.qZA()(),e.TgZ(21,"div",1)(22,"label",2),e._uU(23,"Favoritos"),e.qZA(),e.TgZ(24,"div",9),e.YNc(25,A,6,2,"div",10),e.qZA()(),e.TgZ(26,"div",11)(27,"div",12)(28,"button",13),e._uU(29," Guardar "),e.qZA()()()(),e.TgZ(30,"span"),e._uU(31,"Valid"),e.qZA(),e.TgZ(32,"pre"),e._uU(33),e.ALo(34,"json"),e.qZA(),e._UZ(35,"br"),e.TgZ(36,"span"),e._uU(37,"Value"),e.qZA(),e.TgZ(38,"pre"),e._uU(39),e.ALo(40,"json"),e.qZA(),e._UZ(41,"br"),e.TgZ(42,"span"),e._uU(43,"Agregar Juego"),e.qZA(),e.TgZ(44,"pre"),e._uU(45),e.ALo(46,"json"),e.qZA()),2&n&&(e.xp6(5),e.Q6J("formGroup",r.myDynamicForm),e.xp6(6),e.Q6J("ngIf",r.isValidField("name")),e.xp6(6),e.Q6J("formControl",r.newFavorite),e.xp6(3),e.Q6J("ngIf",r.newFavorite.errors&&r.newFavorite.touched),e.xp6(5),e.Q6J("ngForOf",r.favoriteGames.controls),e.xp6(8),e.Oqu(e.lcZ(34,8,r.myDynamicForm.valid)),e.xp6(6),e.Oqu(e.lcZ(40,10,r.myDynamicForm.value)),e.xp6(6),e.Oqu(e.lcZ(46,12,r.myDynamicForm.controls.favoriteGames.value)))},dependencies:[s.sg,s.O5,i._Y,i.Fj,i.JJ,i.JL,i.oH,i.sg,i.u,i.CE,s.Ts],encapsulation:2}),a})()},{path:"switches",component:(()=>{var o;class a{constructor(n,r){this.formBuilder=n,this.validatorsSerice=r,this.mySwitchesForm=this.formBuilder.group({gender:["M",[i.kI.required]],wantNotifications:[!1,[i.kI.required]],termsAndConditions:[!1,[i.kI.required,i.kI.requiredTrue]]}),this.person={gender:"M",wantNotifications:!1,termsAndConditions:!1}}ngOnInit(){this.mySwitchesForm.reset(this.person)}isValidField(n){return this.validatorsSerice.isValidField(this.mySwitchesForm,n)}getFieldError(n){return this.mySwitchesForm.controls[n]?this.validatorsSerice.getFieldErrors(this.mySwitchesForm,n):null}onSubmit(){if(this.mySwitchesForm.invalid)return void this.mySwitchesForm.markAllAsTouched();const{termsAndConditions:n,...r}=this.mySwitchesForm.value;this.person=r,console.log(this.person),this.mySwitchesForm.reset({gender:"M",wantNotifications:!1,termsAndConditions:!1})}}return(o=a).\u0275fac=function(n){return new(n||o)(e.Y36(i.qu),e.Y36(l.S))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-switches-page"]],decls:75,vars:24,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],[1,"form-check"],["type","radio","value","M","id","radioMasculino","formControlName","gender",1,"form-check-input"],["for","radioMasculino",1,"form-check-label"],["type","radio","value","F","id","radioFemenino","formControlName","gender",1,"form-check-input"],["for","radioFemenino",1,"form-check-label"],["class","form-text text-danger",4,"ngIf"],[1,"form-check","form-switch","mt-2"],["type","checkbox","id","flexSwitchCheckChecked","formControlName","wantNotifications",1,"form-check-input"],["for","flexSwitchCheckChecked",1,"form-check-label"],["type","checkbox","id","flexCheckDefault","formControlName","termsAndConditions",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],[1,"row"],[1,"col"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(n,r){1&n&&(e.TgZ(0,"h2"),e._uU(1,"Reactivos: Switches"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"form",0),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(4,"div",1)(5,"label",2),e._uU(6,"G\xe9nero"),e.qZA(),e.TgZ(7,"div",3)(8,"div",4),e._UZ(9,"input",5),e.TgZ(10,"label",6),e._uU(11," Masculino "),e.qZA()(),e.TgZ(12,"div",4),e._UZ(13,"input",7),e.TgZ(14,"label",8),e._uU(15," Femenino "),e.qZA()(),e.YNc(16,T,2,1,"span",9),e.qZA()(),e.TgZ(17,"div",1)(18,"label",2),e._uU(19,"Notificaciones"),e.qZA(),e.TgZ(20,"div",3)(21,"div",10),e._UZ(22,"input",11),e.TgZ(23,"label",12),e._uU(24,"Quiero recibir notificaciones"),e.qZA()()()(),e.TgZ(25,"div",1),e._UZ(26,"label",2),e.TgZ(27,"div",3)(28,"div",4),e._UZ(29,"input",13),e.TgZ(30,"label",14),e._uU(31," T\xe9rminos y condiciones de uso "),e.qZA()(),e.YNc(32,q,2,1,"span",9),e.qZA()(),e.TgZ(33,"div",15)(34,"div",16)(35,"button",17),e._uU(36," Guardar "),e.qZA()()()(),e.TgZ(37,"h5"),e._uU(38,"Valor del formulario"),e.qZA(),e.TgZ(39,"pre"),e._uU(40),e.ALo(41,"json"),e.qZA(),e._UZ(42,"br"),e.TgZ(43,"h5"),e._uU(44,"Genero"),e.qZA(),e.TgZ(45,"pre"),e._uU(46),e.ALo(47,"json"),e.qZA(),e.TgZ(48,"span"),e._uU(49,"Errores"),e.qZA(),e.TgZ(50,"pre"),e._uU(51),e.ALo(52,"json"),e.qZA(),e._UZ(53,"br"),e.TgZ(54,"h5"),e._uU(55,"Notoficaciones"),e.qZA(),e.TgZ(56,"pre"),e._uU(57),e.ALo(58,"json"),e.qZA(),e.TgZ(59,"span"),e._uU(60,"Errores"),e.qZA(),e.TgZ(61,"pre"),e._uU(62),e.ALo(63,"json"),e.qZA(),e._UZ(64,"br"),e.TgZ(65,"h5"),e._uU(66,"Terminos y Condiciones"),e.qZA(),e.TgZ(67,"pre"),e._uU(68),e.ALo(69,"json"),e.qZA(),e.TgZ(70,"span"),e._uU(71,"Errores"),e.qZA(),e.TgZ(72,"pre"),e._uU(73),e.ALo(74,"json"),e.qZA()),2&n&&(e.xp6(3),e.Q6J("formGroup",r.mySwitchesForm),e.xp6(13),e.Q6J("ngIf",r.isValidField("gender")),e.xp6(16),e.Q6J("ngIf",r.isValidField("termsAndConditions")),e.xp6(8),e.Oqu(e.lcZ(41,10,r.person)),e.xp6(6),e.Oqu(e.lcZ(47,12,r.mySwitchesForm.controls.gender.value)),e.xp6(5),e.Oqu(e.lcZ(52,14,r.mySwitchesForm.controls.gender.errors)),e.xp6(6),e.Oqu(e.lcZ(58,16,r.mySwitchesForm.controls.wantNotifications.value)),e.xp6(5),e.Oqu(e.lcZ(63,18,r.mySwitchesForm.controls.wantNotifications.errors)),e.xp6(6),e.Oqu(e.lcZ(69,20,r.mySwitchesForm.controls.termsAndConditions.value)),e.xp6(5),e.Oqu(e.lcZ(74,22,r.mySwitchesForm.controls.termsAndConditions.errors)))},dependencies:[s.O5,i._Y,i.Fj,i.Wl,i._,i.JJ,i.JL,i.sg,i.u,s.Ts],encapsulation:2}),a})()},{path:"**",redirectTo:"basic"}]}];let U=(()=>{var o;class a{}return(o=a).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(F),p.Bz]}),a})(),b=(()=>{var o;class a{}return(o=a).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.ez,U,i.UX]}),a})()}}]);
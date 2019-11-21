(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{514:function(e,n,a){"use strict";var l,r,t,i={kind:"Request",fragment:{kind:"Fragment",name:"resultQuery",type:"Query",metadata:null,argumentDefinitions:l=[{kind:"LocalArgument",name:"params",type:"SearchParams!",defaultValue:null}],selections:[{kind:"LinkedField",alias:null,name:"search",storageKey:null,args:r=[{kind:"Variable",name:"params",variableName:"params"}],concreteType:"Item",plural:!0,selections:[{kind:"FragmentSpread",name:"Itinerary_flights",args:null}]}]},operation:{kind:"Operation",name:"resultQuery",argumentDefinitions:l,selections:[{kind:"LinkedField",alias:null,name:"search",storageKey:null,args:r,concreteType:"Item",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"price",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"bookingToken",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"route",storageKey:null,args:null,concreteType:"Route",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"from",storageKey:null,args:null,concreteType:"RouteRendezvous",plural:!1,selections:t=[{kind:"ScalarField",alias:null,name:"city",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"iata",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"timeLocal",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"to",storageKey:null,args:null,concreteType:"RouteRendezvous",plural:!1,selections:t},{kind:"LinkedField",alias:null,name:"parts",storageKey:null,args:null,concreteType:"Part",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"carrier",args:null,storageKey:null}]}]}]}]},params:{operationKind:"query",name:"resultQuery",id:null,text:"query resultQuery(\n  $params: SearchParams!\n) {\n  search(params: $params) {\n    ...Itinerary_flights\n  }\n}\n\nfragment Itinerary_flights on Item {\n  price\n  bookingToken\n  route {\n    ...Route_flight\n    from {\n      timeLocal\n    }\n    to {\n      timeLocal\n    }\n  }\n}\n\nfragment Route_flight on Route {\n  from {\n    city\n    iata\n    timeLocal\n  }\n  to {\n    city\n    iata\n    timeLocal\n  }\n  parts {\n    carrier\n  }\n}\n",metadata:{}}};i.hash="0120cb26428c09f2cd5828aa16a33a6c",e.exports=i},642:function(e,n,a){__NEXT_REGISTER_PAGE("/__generated__/resultQuery.graphql",function(){return e.exports=a(514),{page:e.exports.default}})}},[[642,0]]]);
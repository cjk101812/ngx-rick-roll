# ng-rick-roll

The Angular library we all needed, but don't deserve.

![https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif](https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif)

## Features

It's Rick Roll.  What more could you want.

### Usage
Install the library.
```
npm install ng-rick-roll --save
```

Import the library into your Angular app.
```
...
import { NgRickRollModule } from 'ng-rick-roll';      <---- Import here!

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    NgRickRollModule                                  <---- and here!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Viola!  Rick Roll is ready to roll.
```
<ng-rick-roll [showVideo]="true"></ng-rick-roll>
```
### Inputs
> `showVideo` (optional, default "false"): If true, will show embedded Rick Roll video. Otherwise, will show a link. 

## Features/Issues
Request features or report issues [here](https://github.com/cjk101812/ngx-rick-roll/issues).
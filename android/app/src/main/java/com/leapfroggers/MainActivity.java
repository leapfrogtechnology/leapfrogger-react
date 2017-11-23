package com.leapfroggers;

import com.facebook.react.ReactActivity;
import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends com.reactnativenavigation.controllers.SplashActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Leapfroggers";
    }
}

using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Library.RNLibrary
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNLibraryModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNLibraryModule"/>.
        /// </summary>
        internal RNLibraryModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNLibrary";
            }
        }
    }
}

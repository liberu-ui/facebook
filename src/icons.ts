/**
 * This file imports and uses the @fortawesome/fontawesome-svg-core library to add font awesome icons.
 */

import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

/**
 * Adds the specified Font Awesome icons to the library.
 * 
 * @param icons The Font Awesome icons to add.
 */
function addIconsToLibrary(...icons: IconDefinition[]): void {
  library.add(...icons);
}

// Add the Font Awesome icons to the library
addIconsToLibrary(faFacebookSquare, faPuzzlePiece);

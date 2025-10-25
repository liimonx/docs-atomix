import { getComponentDocumentation } from './src/utils/documentationLoader';

async function testContentTransformation() {
  console.log('Testing content transformation...');
  
  try {
    // Test loading Card component documentation
    const cardDoc = await getComponentDocumentation('card');
    
    if (cardDoc) {
      console.log('✅ Card component documentation loaded successfully!');
      console.log('Component Name:', cardDoc.name);
      console.log('Description:', cardDoc.description);
      console.log('Category:', cardDoc.category);
      console.log('Props count:', cardDoc.props?.length || 0);
      console.log('Examples count:', cardDoc.examples?.length || 0);
      console.log('Features count:', cardDoc.features?.length || 0);
      
      // Test loading Button component documentation
      const buttonDoc = await getComponentDocumentation('button');
      
      if (buttonDoc) {
        console.log('\n✅ Button component documentation loaded successfully!');
        console.log('Component Name:', buttonDoc.name);
        console.log('Description:', buttonDoc.description);
        console.log('Category:', buttonDoc.category);
        console.log('Props count:', buttonDoc.props?.length || 0);
        console.log('Examples count:', buttonDoc.examples?.length || 0);
        console.log('Features count:', buttonDoc.features?.length || 0);
      }
      
      // Test loading Badge component documentation
      const badgeDoc = await getComponentDocumentation('badge');
      
      if (badgeDoc) {
        console.log('\n✅ Badge component documentation loaded successfully!');
        console.log('Component Name:', badgeDoc.name);
        console.log('Description:', badgeDoc.description);
        console.log('Category:', badgeDoc.category);
        console.log('Props count:', badgeDoc.props?.length || 0);
        console.log('Examples count:', badgeDoc.examples?.length || 0);
        console.log('Features count:', badgeDoc.features?.length || 0);
      }
      
    } else {
      console.log('❌ Failed to load Card component documentation');
    }
    
  } catch (error) {
    console.error('❌ Error during content transformation test:', error);
  }
}

// Run the test
testContentTransformation();
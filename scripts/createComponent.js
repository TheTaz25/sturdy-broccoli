const { program } = require('commander');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

let componentName = undefined;

const destination = path.resolve(__dirname, '..', 'src');
const scss = '<name>.scss';
const stories = '<name>.stories.tsx';
const test = '<name>.test.tsx';
const component = '<name>.tsx';
const types = '<name>.types.ts';

program.arguments('<name>')
.action(function(name) {
    componentName = name;
});

program.parse(process.argv);

if(typeof componentName !== 'string') {
    console.error("Please specify a name of the new component!")
    process.exit(1);
}

componentName = componentName[0].toUpperCase() + componentName.slice(1);
console.log(chalk.blue.bold(`Creating new component with name '${componentName}'!`));

const scssFileName = scss.replace('<name>', componentName);
const storiesFileName = stories.replace('<name>', componentName);
const testFileName = test.replace('<name>', componentName);
const componentFileName = component.replace('<name>', componentName);
const typesFileName = types.replace('<name>', componentName);

fs.mkdirSync(path.join(destination, componentName));

const componentFolder = path.resolve(destination, componentName);

fs.writeFile(path.resolve(componentFolder, scssFileName), `
.broccoli {
  color: inherit;
}
`, (err) => {
    if(err) {
        console.log(chalk.red`'Could not create new component, exiting...'`);
        process.exit(1);
    }
});

fs.writeFile(path.resolve(componentFolder, storiesFileName), `import React from 'react';
import ${componentName} from './${componentName}';

export default {
  title: '${componentName}'
};

export const Basic = () => <${componentName} />;
`, (err) => {
    if(err) {
        console.log(chalk.red`'Could not create new component, exiting...'`);
        process.exit(1);
    }
});

fs.writeFile(path.resolve(componentFolder, testFileName), `import React from 'react';
import { render } from '@testing-library/react';

import ${componentName} from './${componentName}';
import { ${componentName}Props } from './${componentName}.types';

/*
  TODO: Replace the following content with more meaningful tests
  What you can test:
  1. Just the plain component
  2. Test various props
  3. If your component supports multiple data types as props, test those
  4. Check if events are called and how many are called (best case: 1)
  5. Test all possible conditions if your component is complex
  6. Check the component's state before and after an event
  7. Add tests for each component related issue!
*/
describe('${componentName} Test', () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = null;
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it('should plainly render', () => {
    const { getByText } = renderComponent();

    const component = getByText('${componentName}');

    expect(component).toBeInTheDocument();
  });
});
`, (err) => {
    if(err) {
        console.log(chalk.red`'Could not create new component, exiting...'`);
        process.exit(1);
    }
});

fs.writeFile(path.resolve(componentFolder, componentFileName), `import React from 'react';

import { ${componentName}Props } from './${componentName}.types';

import './${componentName}.scss';

const ${componentName}: React.FC<${componentName}Props> = () => (
    <div>${componentName}</div>
);

export default ${componentName};
`, (err) => {
    if(err) {
        console.log(chalk.red`'Could not create new component, exiting...'`);
        process.exit(1);
    }
});

fs.writeFile(path.resolve(componentFolder, typesFileName), `export interface ${componentName}Props {

}
`, (err) => {
    if(err) {
        console.log(chalk.red`'Could not create new component, exiting...'`);
        process.exit(1);
    }
});

console.log(chalk.green.bold`Successfully added the following files in folder ${destination}/${componentName}:
${componentFileName}
${typesFileName}
${scssFileName}
${testFileName}
${storiesFileName}
`);
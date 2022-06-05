const widget_type_const = ['contacts', 'calendar', 'phone'];

const generateWidget = (widgetType, widgetConfigurationSize, widgetConfigurationFontSize, containerEl) => {
  let textNodeEl;
  const paragraphEl = document.createElement('p');
  const widgetContainerEl = document.createElement('div');

  if (widgetType === widget_type_const[0]) textNodeEl = document.createTextNode('Contacts Widget');
  if (widgetType === widget_type_const[1]) textNodeEl = document.createTextNode('Calendar Widget');
  if (widgetType === widget_type_const[2]) textNodeEl = document.createTextNode('Phone Widget');

  paragraphEl.appendChild(textNodeEl);

  if (widgetConfigurationSize === 'small') {
    widgetContainerEl.widget = 200;
    widgetContainerEl.height = 200;
    paragraphEl.style.fontSize = widgetConfigurationFontSize;
  }
  if (widgetConfigurationSize === 'medium') {
    widgetContainerEl.widget = 400;
    widgetContainerEl.height = 400;
    paragraphEl.style.fontSize = widgetConfigurationFontSize;
  }
  if (widgetConfigurationSize === 'large') {
    widgetContainerEl.widget = 600;
    widgetContainerEl.height = 600;
    paragraphEl.style.fontSize = widgetConfigurationFontSize;
  }

  widgetContainerEl.addEventListener('click', () => {
    if (widgetType === widget_type_const[0]) console.log('You clicked on the "Contacts" widget!');
    if (widgetType === widget_type_const[1]) console.log('You clicked on the "Calendar" widget!');
    if (widgetType === widget_type_const[2]) console.log('You clicked on the "Phone" widget!');
  });

  widgetContainerEl.appendChild(paragraphEl);
  containerEl.appendChild(widgetContainerEl);
};

const generateNumberOfWidgets = (widget, number) => {
  for (let i = 0; i < number; i++) {
    generateWidget(...widget);
  }
};

generateNumberOfWidgets(['contacts', "small", 12, document.body], 10);
generateNumberOfWidgets(['calendar', "medium", 14, document.body], 10);
generateNumberOfWidgets(['phone', "large", 16, document.body], 10);

const stylelintConfig = require('./stylelint.config');

const { plugins, rules } = stylelintConfig;

const orderRules = [
  'custom-properties',
  'dollar-variables',
  'declarations',
  'rules',
  'at-rules',
];

const propertiesOrderRules = [
  [
    'box-sizing',
    {
      groupName: 'position',
      emptyLineBefore: 'never',
      properties: ['position', 'top', 'left', 'bottom', 'right', 'transform'],
    },
    {
      groupName: 'display',
      emptyLineBefore: 'never',
      properties: [
        'display',
        'float',
        'flex-direction',
        'justify-content',
        'align-items',
        'align-content',
        'flex',
        'flex-wrap',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'order',
      ],
    },
    {
      groupName: 'boxModel',
      emptyLineBefore: 'never',
      properties: [
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'border',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-color',
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
      ],
    },
    {
      groupName: 'dimensions',
      emptyLineBefore: 'never',
      properties: [
        'min-width',
        'min-height',
        'max-width',
        'max-height',
        'width',
        'height',
      ],
    },
    {
      groupName: 'background',
      emptyLineBefore: 'never',
      properties: [
        'background',
        'background-color',
        'background-image',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-size',
      ],
    },
    {
      groupName: 'font',
      emptyLineBefore: 'never',
      properties: [
        'font',
        'font-family',
        'font-size',
        'line-height',
        'font-weight',
        'text-align',
        'white-space',
        'word-wrap',
        'color',
      ],
    },
    {
      groupName: 'other',
      emptyLineBefore: 'never',
      properties: ['stroke', 'fill', 'transition'],
    },
  ],
  { unspecified: 'ignore' },
];

plugins.push('stylelint-order');
rules['order/order'] = orderRules;
rules['order/properties-order'] = propertiesOrderRules;

module.exports = { plugins, rules };

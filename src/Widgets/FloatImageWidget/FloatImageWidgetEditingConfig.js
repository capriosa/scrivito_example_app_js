import * as Scrivito from 'scrivito'
import imageWidgetIcon from '../../assets/images/image_widget.svg'
import * as ScrivitoPicks from 'scrivito-picks'

Scrivito.provideEditingConfig('FloatImageWidget', {
  title: 'Float Image',
  thumbnail: imageWidgetIcon,

  propertiesGroups: [
    {
      title: 'Clip-Path',
      component: ScrivitoPicks.createComponent([

        {
          attribute: 'form',
          values: [
            { value: 'triangle', title: 'Triangle', previewClassName: 'triangle mask' },
            { value: 'trapezoid', title: 'Trapezoid', previewClassName: 'trapezoid mask' },
            { value: 'parallelogram', title: 'Parallelogram', previewClassName: 'parallelogram mask' },
            { value: 'rhombus', title: 'Rhombus', previewClassName: 'rhombus mask' },
            { value: 'pentagon', title: 'Pentagon', previewClassName: 'pentagon mask' },
            { value: 'hexagon', title: 'Hexagon', previewClassName: 'hexagon mask' },
            { value: 'heptagon', title: 'Heptagon', previewClassName: 'heptagon mask' },
            { value: 'octagon', title: 'Octagon', previewClassName: 'octagon mask' },
            { value: 'nonagon', title: 'Nonagon', previewClassName: 'nonagon mask' },
            { value: 'decagon', title: 'Decagon', previewClassName: 'decagon mask' },
            { value: 'bevel', title: 'Bevel', previewClassName: 'bevel mask' },
            { value: 'rabbet', title: 'Rabbet', previewClassName: 'rabbet mask' },
            { value: 'left-arrow', title: 'Left arrow', previewClassName: 'left-arrow mask' },
            { value: 'right-arrow', title: 'Right arrow', previewClassName: 'right-arrow mask' },
            { value: 'left-point', title: 'Left point', previewClassName: 'left-point mask' },
            { value: 'right-point', title: 'Right point', previewClassName: 'right-point mask' },
            { value: 'left-chevron', title: 'Left chevron', previewClassName: 'left-chevron mask' },
            { value: 'right-chevron', title: 'Right chevron', previewClassName: 'right-chevron mask' },
            { value: 'star', title: 'Star', previewClassName: 'star mask' },
            { value: 'cross', title: 'Cross', previewClassName: 'cross mask' },
            { value: 'message', title: 'Message', previewClassName: 'message mask' },
            { value: 'close', title: 'Close', previewClassName: 'close mask' },
            { value: 'frame', title: 'Frame', previewClassName: 'frame mask' }
          ]
        }

      ])
    }
  ],

  attributes: {
    alignment: {
      title: 'Alignment',
      description: 'Default: Left',
      values: [
        { value: 'left', title: 'Left' },
        { value: 'center', title: 'Center' },
        { value: 'right', title: 'Right' }
      ]
    },
    float: {
      title: 'Position of image for floating text around image',
      description: 'Default: None',
      values: [
        { value: 'none', title: 'None' },
        { value: 'left', title: 'Left' },
        { value: 'right', title: 'Right' }
      ]
    },
    alternativeText: {
      title: 'Alternative text (optional)',
      description:
        'Brief description of what the image is about.' +
        ' If empty, the alternative text of the image is used.'
    },
    link: {
      title: 'Link (optional)',
      description: 'The page to open after clicking the image.'
    },
    animation: {
      title: 'Animation',
      description:
        'The animation to perform as this image becomes visible. Default: None',
      values: [
        { value: 'none', title: 'None' },
        { value: 'fadeInLeft', title: 'Left to center' },
        { value: 'fadeInRight', title: 'Right to center' },
        { value: 'fadeInDown', title: 'Top to center' },
        { value: 'fadeInUp', title: 'Bottom to center' },
        { value: 'zoomIn', title: 'Zoom in' }
      ]
    }

  },
  properties: ['animation', 'alignment', 'float', 'alternativeText', 'link'],
  initialContent: {
    alignment: 'left',
    float: 'none',
    animation: 'none'
  }
})

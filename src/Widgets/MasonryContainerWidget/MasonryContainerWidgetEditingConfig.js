import * as Scrivito from 'scrivito'
import columnContainerWidgetIcon from '../../assets/images/column_container_widget.svg'
import MasonryWidget from '../MasonryWidget/MasonryWidgetClass'

Scrivito.provideEditingConfig('MasonryContainerWidget', {
  title: 'Masonry',

  propertiesGroups: [
    {
      title: "Device size",
      properties: ["device", "class"]
    },
    {
      title: "Columns layout",
      component: "ColumnsEditorTab",
    },
  ],
  initialContent: {
    device: "lg-",
    columns: [
      new MasonryWidget({ colSize: 4 }),
      new MasonryWidget({ colSize: 4 }),
      new MasonryWidget({ colSize: 4 }),
    ],
    alignment: "start",
  },


})

import { useEffect } from "react"
import { useComponentsStore } from "../stores/components"

export default function EditArea() {

  const {components, addComponent, deleteComponent, updateComponent} = useComponentsStore()

  useEffect(() => {
    addComponent({
      id: 222,
      name: 'Container',
      props: {},
      children: []
    }, 1)

    addComponent({
      id: 333,
      name: 'Container',
      props: {},
      children: []
    }, 222);

    setTimeout(() => {
      // deleteComponent(333)
      updateComponent(222, {
        title: '666666'
      })
    }, 3000)

  }, [])

  return <div>
    <pre>
      {
        JSON.stringify(components, null, 2)
      }
    </pre>
  </div>
  }
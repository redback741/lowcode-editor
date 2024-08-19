import React, { useEffect } from "react";
import { useComponentConfigStore } from "../stores/component-config";
import { Component, useComponentsStore } from "../stores/components"

export default function EditArea() {
    const { components, addComponent } = useComponentsStore();
    const { componentConfig } = useComponentConfigStore();

    useEffect(()=> {
        addComponent({
            id: 222,
            name: 'Container',
            props: {},
            children: []
        }, 1);

        addComponent({
            id: 333,
            name: 'Button',
            props: {
                text: '无敌'
            },
            children: []
        }, 222);
    }, []);


    function renderComponents(components: Component[]): React.ReactNode {
        return components.map((component: Component) => {
            const config = componentConfig?.[component.name]

            console.log(component, componentConfig)
            if (!config?.component) {
                return null;
            }
            console.log(config)
            return React.createElement(
                config.component,
                {
                  key: component.id,
                  id: component.id,
                  name: component.name,
                  ...config.defaultProps,
                  ...component.props,
                },
                renderComponents(component.children || [])
            )
        })
    }

    return <div className="h-[100%]">
        {/* <pre>
            {JSON.stringify(components, null, 2)}
        </pre> */}
        {renderComponents(components)}
    </div>
}

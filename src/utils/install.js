// 组件安装函数
export const withInstall = (comp, name) => {
    comp.install = (app) => {
        const componentName = name || comp.name || 'MyComponent';
        app.component(componentName, comp);
    };
    return comp;
};
// 指令安装函数
export const withInstallDirective = (directive) => {
    directive.install = (app) => {
        const name = directive.name || 'myDirective';
        app.directive(name, directive);
    };
    return directive;
};
// 批量安装函数
export const withInstallComponents = (components) => {
    Object.entries(components).forEach(([, comp]) => {
        withInstall(comp);
    });
    return components;
};

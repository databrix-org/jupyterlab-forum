import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_forum extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_forum:plugin',
  description: 'A JupyterLab extension for building a forum ui in jupyterlab',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_forum is activated!');
  }
};

export default plugin;

const Singleton = (function () {
  let instance;

  function createInstance() {
    instance = new Object();
  }

  return {
    getInstance: function getInstance() {
      if (!instance) {
        createInstance();
      }

      return instance;
    },
  };
})();

function main() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  console.log(instance1 === instance2);
}

main();

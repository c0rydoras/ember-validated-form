import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module(
  "Integration | Component | validated-input/-themes/bootstrap/hint",
  function(hooks) {
    setupRenderingTest(hooks);

    test("it renders", async function(assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`{{validated-input/-themes/bootstrap/hint}}`);

      assert.equal(this.element.textContent.trim(), "");

      // Template block usage:
      await render(hbs`
      {{#validated-input/-themes/bootstrap/hint}}
        template block text
      {{/validated-input/-themes/bootstrap/hint}}
    `);

      assert.equal(this.element.textContent.trim(), "template block text");
    });
  }
);

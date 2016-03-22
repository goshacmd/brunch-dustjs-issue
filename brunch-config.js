module.exports = {
  // See http://brunch.io for documentation.
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app/,
        'vendor.js': /^vendor/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      defaultExtension: 'dust',
      joinTo: 'app.js'
    }
  }
}

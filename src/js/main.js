import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/main.css'
import { prepareForm } from './form-util'
import { warnFacebookBrowserUserIfNecessary } from './facebook-util'
import { createForm } from './form'

warnFacebookBrowserUserIfNecessary()
createForm()
prepareForm()

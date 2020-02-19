import PropTypes from 'prop-types'
import React from 'react'
import { AppBar, Link, Typography, Toolbar, Box } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import LocaleSelector from './LocaleSelector'
import { LOCALES } from '../const'
import enFlag from '../images/flags/uk.svg'
import ruFlag from '../images/flags/russia.svg'
import byFlag from '../images/flags/belarus.svg'

const { en, ru, by } = LOCALES
const locales = [
  {
    name: en,
    icon: enFlag,
    url: '/'
  },
  {
    name: ru,
    icon: ruFlag,
    url: `/${ru}`
  },
  {
    name: by,
    icon: byFlag,
    url: `/${by}`
  }
]
const Header = ({ siteTitle }) => {
  const { t, i18n } = useTranslation()
  const handleChangeLanguage = lang => () => i18n.changeLanguage(lang)
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography className="header-nav">
          <Link href="/" color="inherit">
            {t('main')}
          </Link>
          <Link href="/architects" color="inherit">
            {t('architects')}
          </Link>
        </Typography>
        <Box className="header-locale-selector">
          <LocaleSelector locales={locales} onSwitch={handleChangeLanguage} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header

import { Label } from 'components/atoms/footer-section-label'
import { Separator } from 'components/molecules/separator'
import { SocialLinks } from 'components/molecules/social-links'
import { WebsiteLinks } from 'components/molecules/website-links'
import links from 'data/links'

import Confetti from 'components/atoms/confetti'
import { useState } from 'react'
import Container from 'components/molecules/container'

export default function Footer() {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false)
  return (
    <footer className="py-16 bg-slate-50 border-t flex">
      <Container>
        <Label value="websites" />
        <Separator />

        <div className="mt-4 flex flex-col" onMouseEnter={() => setIsConfettiVisible(true)}>
          <WebsiteLinks
            link={links.portfolio}
            description={'Portfolio para concentrar informações sobre mim.'}
          />
        </div>
        {isConfettiVisible && <Confetti />}
      </Container>
      <Container>
        <Label value="social" />
        <Separator />
        <div className="mt-4 flex flex-col">
          <SocialLinks />
        </div>
      </Container>
    </footer>
  )
}

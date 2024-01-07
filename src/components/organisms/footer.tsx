import { Label } from 'src/components/atoms/footer-section-label'
import { Separator } from 'src/components/molecules/separator'
import { SocialLinks } from 'src/components/molecules/social-links'
import { WebsiteLinks } from 'src/components/molecules/website-links'
import links from 'data/links'

import Confetti from 'src/components/atoms/confetti'
import { useState } from 'react'
import Container from 'src/components/molecules/container'

export default function Footer() {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false)
  return (
    <footer className="py-16 bg-slate-50 border-t flex flex-col md:flex-row justify-left">
      <Container>
        <Label value="websites" />
        <Separator />
        <div
          className="mt-4 flex flex-col"
          onMouseEnter={() => setIsConfettiVisible(true)}
        >
          <WebsiteLinks
            link={links.portfolio}
            description={'Portfolio para concentrar informações sobre mim.'}
          />
        </div>
        {isConfettiVisible && <Confetti />}
      </Container>
      <Container>
        <div className="hidden md:block">
          <Label value="social" />
          <Separator />
        </div>
        <div className="mt-4 flex flex-col">
          <SocialLinks />
        </div>
      </Container>
    </footer>
  )
}

import { SanityDocumentStub } from '@sanity/client'

export type AlgoliaRecord = Readonly<Record<string, any>>

export interface SerializeFunction {
  (document: SanityDocumentStub): Promise<AlgoliaRecord>
}

export interface TransformFunction {
  (documents: SanityDocumentStub[]): Promise<SanityDocumentStub[]>
}

export interface VisiblityFunction {
  (document: SanityDocumentStub): boolean
}

export type WebhookBody = {
  ids: {
    created: string[]
    updated: string[]
    deleted: string[]
  }
}

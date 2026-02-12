'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cities } from '@/data/cities'

export default function CitiesSection() {
  const [search, setSearch] = useState('')

  const filtered = search.trim()
    ? cities.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.cp.includes(search) ||
        c.department.toLowerCase().includes(search.toLowerCase())
      )
    : cities

  const departments = Array.from(new Set(cities.map(c => c.department))).sort()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-forest mb-3">
            Notre zone d&apos;intervention
          </h2>
          <p className="text-sage max-w-2xl mx-auto">
            Nous intervenons dans un rayon de 100 km autour de Montpellier et Nîmes,
            couvrant {cities.length} communes dans {departments.length} départements.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher une ville, code postal ou département..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {search && (
            <p className="text-sm text-gray-500 mt-2 text-center">
              {filtered.length} résultat{filtered.length > 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Cities grid grouped by department */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-8">
            Aucune ville trouvée pour &quot;{search}&quot;
          </p>
        ) : (
          <div className="space-y-6">
            {departments.map(dept => {
              const deptCities = filtered.filter(c => c.department === dept)
              if (deptCities.length === 0) return null
              return (
                <div key={dept}>
                  <h3 className="font-heading font-semibold text-forest mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {dept}
                    <span className="text-xs text-gray-400 font-normal">({deptCities.length})</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {deptCities
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map(city => (
                        <Link
                          key={city.slug}
                          href={`/zone/${city.slug}`}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all hover:shadow-sm ${
                            city.priority === 'high'
                              ? 'bg-forest/10 text-forest font-medium hover:bg-forest/20'
                              : 'bg-white text-gray-700 border border-gray-200 hover:border-forest/30'
                          }`}
                        >
                          {city.name}
                          <span className="text-xs text-gray-400">{city.cp}</span>
                        </Link>
                      ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
